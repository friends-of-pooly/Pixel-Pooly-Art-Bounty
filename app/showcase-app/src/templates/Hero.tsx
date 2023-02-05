import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://snapshot.org/#/friendsofpooly.eth" target={'_blank'}>
            <a>Snapshot</a>
          </Link>
        </li>
        <li>
          <Link href="https://app.dework.xyz/friends-of-pooly/art-1" target={'_blank'}>
            <a>Dework</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/FriendsofPooly" target={'_blank'}>
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://discord.gg/dJqRzUWfa7" target={'_blank'}>
            <a>Discord</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"Friends of Pooly's first\n"}
            <span className="text-indigo-700">Art Bounty Showcase</span>
          </>
        }
        description="Pooly NFT holders vote for your favorites on Snapshot"
        button={
          <Link href="https://snapshot.org/#/friendsofpooly.eth" target={'_blank'}>
            <a>
              <Button xl>Vote on Snapshot</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
