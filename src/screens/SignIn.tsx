import { Platform } from 'react-native';
import {
  VStack,
  Center,
  Image,
  Text,
  Heading,
  KeyboardAvoidingView,
} from 'native-base';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import BackgroundPng from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

export function SignIn() {
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <VStack flex={1} bg='gray.700' px={10} py={16} justifyContent='space-between'>
        <Image
          source={BackgroundPng}
          alt='People training'
          resizeMode='contain'
          position='absolute'
        />

        <Center>
          <LogoSvg />
          <Text color='gray.100' fontSize='sm'>
            Train your mind and body
          </Text>
        </Center>

        <Center my={Platform.OS === 'ios' ? 10 : 16}>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Sign in your account
          </Heading>

          <Input
            mb={4}
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <Input
            mb={4}
            placeholder='Password'
            secureTextEntry
          />

          <Button title='Sign in' />
        </Center>

        <Center>
          <Text
            mb={3}
            color='gray.100'
            fontSize='md'
            fontFamily='body'
          >
            Don't have an account yet?
          </Text>

          <Button title='Sign up' variant='outline' />
        </Center>
      </VStack>
    </KeyboardAvoidingView>
  );
}
