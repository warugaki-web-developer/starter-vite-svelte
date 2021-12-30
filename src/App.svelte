<script>
  import logo from './assets/svelte.png';
  import Counter from './lib/Counter.svelte';

  export let title =
    'Vite + Svelte + Eslint(airbnb) + Prettier + Stylelint + Storybook';
  export let read = 'Hello world!';
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>{title}</h1>
  <p>{read}</p>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

  :root {
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 16rem;
    height: 16rem;
  }

  h1 {
    max-width: 14rem;
    margin: 2rem auto;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    color: #696969;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
