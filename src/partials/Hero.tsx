import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Ryan</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            full-stack engineer
          </a>{' '}
          with a product mindset. I love making{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            delightful experiences
          </a>{' '}
          while paying attention to the underlying craft of software
          engineering.
        </>
      }
      avatar={
        <img
          className="w-64 rounded-full bg-gradient-to-tl from-cyan-700 to-blue-300 shadow-xl dark:shadow-gray-800"
          src="/assets/images/portrait.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={[]}
    />
  </Section>
);

export { Hero };
