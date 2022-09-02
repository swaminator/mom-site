import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Hero, NavBar} from '../ui-components'

export default function Home() {
  return (
    <> 
    <NavBar/>
    <Hero/>
    </>
  );
}