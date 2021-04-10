import React, { memo } from 'react';
import { Button } from 'src/components/button';

const Home = memo(function Home() {
  return <Button variant="primary">Home button</Button>;
});

export default Home;
