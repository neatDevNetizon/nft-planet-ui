// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Emp is ERC721Enumerable, Ownable{

    using Strings for uint256;
    using SafeMath for uint256;

    /**
     * baseMetaURI: base URI of metadata
     * metaExtension: extenstion of metadata(*.json)
     */
    string public baseMetaURI   = "https://ipfs.io/ipfs/bafybeiaqmgwd2ip3l5azu6lmkphp6an4gt4opagprj564h2qygdtkm3ira/metadata/";
    string public metaExtension = ".json";

    /**
     * firstTier : maximum index for National Emperor tier. minimum index is 1
     * secondTier: maximum index for Continent Emperor tier. minimum index is firstTier+1
     * thirdTier : maximum index for World Emperor tier. minimum index is secondTier+1
     */
    uint256 public firstTier  = 7000;
    uint256 public secondTier = 9000;
    uint256 public thirdTier  = 10000;

    /**
     * mintPrice<*>: price for mint <*> Emperor token
     */
    uint256 public mintPriceFirstTier  = 0.99 ether;
    uint256 public mintPriceSecondTier = 9.99 ether;
    uint256 public mintPriceThirdTier  = 99.99 ether;

    /**
     * contractPaused: not available Emp contract
     */
    bool public contractPaused = false;

    /**
     * nftPerAddressLimit: mint amount of token per address limit
     * tokenBalanceOf: token balance minted by input address
     */
    uint256 public nftPerAddressLimit = 100;
    mapping(address => uint256) public tokenBalanceOf;

    /**
     * onlyNotBlacklisted: available mint by only addresses not blacklisted or all
     * blacklistedAddress: addresses in blacklist
     */
    bool public onlyNotBlacklisted = true;
    address[] public blacklistedAddress;

    /**
     * _firstTierNextId : maximum index for National Emperor tier. minimum index is 1
     * _secondTierNextId: maximum index for Continent Emperor tier. minimum index is firstTier+1
     * _thirdTierNextId : maximum index for World Emperor tier. minimum index is secondTier+1
     */
    uint256 private _firstTierNextId;
    uint256 private _secondTierNextId;
    uint256 private _thirdTierNextId;

    /**
     * param _name: token name
     * param _symbol: token symbol
     */
    constructor(
        string memory _name,
        string memory _symbol
    )ERC721(_name, _symbol){
        _firstTierNextId = 1;
        _secondTierNextId = firstTier + 1;
        _thirdTierNextId = secondTier + 1;
    }


    /** 
     * mint function
     * param _tokenTier: tier index of token(1: National, 2: Continent, 3: World, else: error)
     */
    function mint(uint256 _tokenTier) public payable{
        require(!contractPaused, "This contract is paused");
        require(
            _tokenTier == 1 
            || _tokenTier == 2 
            || _tokenTier == 3
            , "Unexpected tier"
        );

        if(_tokenTier == 1) {
            require(_firstTierNextId <= firstTier, "All National Emperor is minted");
        } else if(_tokenTier == 2) {
            require(_secondTierNextId <= secondTier, "All Continent Emperor is minted");
        } else if(_tokenTier == 3) {
            require(_thirdTierNextId <= thirdTier, "All World Emperor is minted");
        }
        
        if(msg.sender != owner()){
            if(onlyNotBlacklisted == true){
                require(!isBlacklisted(msg.sender),"your wallet address is blacklisted");
                uint256 ownerTokenCount = tokenBalanceOf[msg.sender];
                require(ownerTokenCount + 1 <= nftPerAddressLimit, "Max NFT per address exceeded");
            }

            if(_tokenTier == 1) {
                require(msg.value >= mintPriceFirstTier, "Insufficient Funds");
            } else if(_tokenTier == 2) {
                require(msg.value >= mintPriceSecondTier, "Insufficient Funds");
            } else if(_tokenTier == 3) {
                require(msg.value >= mintPriceThirdTier, "Insufficient Funds");
            }
        }

        if(_tokenTier == 1) {
            uint256 firstTierCurrentId = _firstTierNextId;
            _firstTierNextId++;
            _safeMint(msg.sender, firstTierCurrentId);
        } else if(_tokenTier == 2) {
            uint256 secondTierCurrentId = _secondTierNextId;
            _secondTierNextId++;
            _safeMint(msg.sender, secondTierCurrentId);
        } else if(_tokenTier == 3) {
            uint256 thirdTierCurrentId = _thirdTierNextId;
            _thirdTierNextId++;
            _safeMint(msg.sender, thirdTierCurrentId);
        }
        tokenBalanceOf[msg.sender]++;
    }

    function setBaseMetaURI(string memory _baseMetaURI) public onlyOwner() {
        baseMetaURI = _baseMetaURI;
    }

    function setMetaExtension(string memory _metaExtension) public onlyOwner(){
        metaExtension = _metaExtension;
    }

    function setTiers(
        uint256 _firstTier,
        uint256 _secondTier,
        uint256 _thirdTier
    ) public onlyOwner() {
        require(
            0 < _firstTier 
            && _firstTier < _secondTier 
            && _secondTier < _thirdTier
            , "Unexpected tier number"
        );
        firstTier = _firstTier;
        secondTier = _secondTier;
        thirdTier = _thirdTier;
    }

    function setMintPrice(
        uint256 _mintPriceFirstTier, 
        uint256 _mintPriceSecondTier, 
        uint256 _mintPriceThirdTier
    ) public onlyOwner(){
        mintPriceFirstTier  = _mintPriceFirstTier;
        mintPriceSecondTier = _mintPriceSecondTier;
        mintPriceThirdTier  = _mintPriceThirdTier;
    }

    function setContractPaused(bool _contractPaused) public onlyOwner() {
        contractPaused = _contractPaused;
    }


    function setNftPerAddressLimit(uint256 _limit) public onlyOwner(){
        nftPerAddressLimit = _limit;
    }

    function setOnlyNotBlacklisted(bool _onlyNotBlacklisted) public onlyOwner() {
        onlyNotBlacklisted = _onlyNotBlacklisted;
    }

    function setBlacklistedAddress(address[] calldata _blacklistedAddress) public onlyOwner() {
        delete blacklistedAddress;
        blacklistedAddress = _blacklistedAddress;
    }

    /** 
     * isBlacklisted function
     * returns a boolean value
     */
    function isBlacklisted(address _user) public view returns(bool) {
        for(uint256 i = 0; i < blacklistedAddress.length; i++) {
            if(blacklistedAddress[i] == _user){
                return true;
            }
        }
        return false;
    }

    function supplyOfEachTier() public view returns(uint256[] memory){
        uint256[] memory supply = new uint256[](3);
        supply[0] = _firstTierNextId  - 1;
        supply[1] = _secondTierNextId - 1;
        supply[2] = _thirdTierNextId  - 1;
        return supply;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns(string memory){
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory currentBaseURI = baseMetaURI;
        return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), metaExtension)) : "";
    }

    function walletOfOwner(address _owner) public view returns(uint256[] memory){
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);

        for (uint256 i =0; i<ownerTokenCount; i++){
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);

        }
        return tokenIds;
    }

    function withdraw() public payable onlyOwner() {
        (bool os,) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }
}