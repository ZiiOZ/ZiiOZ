import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import SimpleCheckout from './pages/SimpleCheckout';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/checkout" component={SimpleCheckout} />
    </Switch>
  );
}
