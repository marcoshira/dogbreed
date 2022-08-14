import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Home } from '../templates/Home';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Index() {
  const { signUp } = useContext(AuthContext);

  return <Home onLogin={signUp} />;
}

export const getStaticProps = canSSRGuest(async () => {
  return {
    props: {},
  };
});
