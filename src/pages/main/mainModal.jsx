import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react'

import React from 'react';

import { Btn }   from "../../components/btn";

export default function MainModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()

  return (
    <>
      <Btn onClick={onOpen} text="Open Modal" />

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box width="50px" height="50px" border="10px" bg="tomato">
            </Box>
          </ModalBody>

          <ModalFooter >
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}