import React           from 'react'
import { useMetamask } from "use-metamask";

export default function Chain() {
    const { metaState } = useMetamask();
    return (
        <p>
            <b>
            <code>
                {metaState.chain.name} - (chain id: {metaState.chain.id})
            </code>
            </b>
        </p>
    )
}
