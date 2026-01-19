import Home from './home';

// Updated Home component to use static props
export default function Index() {
  return (
    <div suppressHydrationWarning>
      <Home />
    </div>
  );
}