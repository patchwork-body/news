import React, { memo } from 'react';
import { Button } from 'components/button';

const Home = memo(function Home() {
  return <Button variant="primary">Home button</Button>;
});

export default Home;
