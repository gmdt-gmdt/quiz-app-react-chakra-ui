import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from './../../Assets/knowledge.png';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  return (
    <>
      <Box bg={useColorModeValue('#171923a8')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            bg={useColorModeValue('#2c2c2da8')}
            _hover={{
              bg: useColorModeValue('#2c2c2d'),
            }}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Avatar onClick={goHome} size={'sm'} src={logo} w={10} h={10} />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontWeight="bold"
            >
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none' }}
                to="/"
              >
                Home
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                About
              </ReachLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} textShadow="dark-lg">
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none' }}
                to="/"
              >
                Home
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                About
              </ReachLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
