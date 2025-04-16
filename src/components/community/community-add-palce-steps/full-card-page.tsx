import { ArrowLeft } from '@/shared/icons/marker-drawer';
import { useStoreNotesAdd } from '@/shared/store/notes-add';
import styled from '@emotion/styled';

import { Links } from '@/components/drawer/marker-drawer-components/body/about/links';
import { Title } from '@/components/drawer/marker-drawer-components/body/about/title';
import { Tags } from '@/components/drawer/marker-drawer-components/body/tags';

import DrawerTelAboutPlace from './drawer-tel-about-place';
import NotesAddLeftDrawer from './notes-add-left-drawer';

export function FullCardPage({ back }: { back: () => void }) {
  // Полная страница карточки 2 шага
  return (
    <ExistingBlock>
      <ImageBlock>
        <Image
          src="https://avatars.mds.yandex.net/get-ydo/11397567/2a0000018d450c76fd10d09071b9f065effb/diploma"
          alt="img"
        />
        <ImageContent>
          <div onClick={back}>
            <ArrowLeft color="#fff" />
          </div>
          <div>
            <p>Ресторан</p>
            <p>Гуси</p>
          </div>
        </ImageContent>
      </ImageBlock>
      <Tags />
      <Content>
        <MyNoteBlock />

        <Links />

        <About />
        <About />
        <About />
        <About />
        {/* Далее кнопка находится в Drawer */}
        <BottomDrawer />
      </Content>
    </ExistingBlock>
  );
}

export function MyNoteBlock() {
  const { notesValue } = useStoreNotesAdd();

  return (
    <NoteContainer>
      <NoteTitle> {notesValue.length > 0 ? 'Заметки пользователей' : 'Ваша заметка'}</NoteTitle>
      <NoteDescription>
        {notesValue.length > 0
          ? notesValue
          : 'Поделитесь вашим мнением о месте, может даже чем нибудь интересным или полезным'}
      </NoteDescription>
      <NotesAddLeftDrawer notesValue={notesValue} />
    </NoteContainer>
  );
}

export function About() {
  return (
    <div style={{ marginTop: '24px' }}>
      <Title title="О месте" />
      <AboutText>
        Необычный современный интерьер удивляет и заставляет с интересом осматриваться, каждый раз замечая новые
        любопытные детали. Ресторан
      </AboutText>
    </div>
  );
}

const DrawerBlock = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  padding: 10px 10px 16px 10px;
`;

export function BottomDrawer() {
  return (
    <DrawerBlock>
      <DrawerTelAboutPlace />
    </DrawerBlock>
  );
}

const AboutText = styled.p`
margin-bottom: 4px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
align-self: stretch;

overflow: hidden;
color: #424242;

text-overflow: ellipsis;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /
`;
const NoteContainer = styled.div`
  background: #f9f9f9; /* фон блока */
  border-radius: 16px; /* скруглённые углы */
  padding: 16px; /* внутренние отступы */
  width: 100%;
  color: #424242;
  margin-bottom: 16px;
`;

// Заголовок
const NoteTitle = styled.h2`
  font-size: 16px; /* размер шрифта */
  font-weight: 700;
`;

// Текст
const NoteDescription = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 150%;
`;

const ExistingBlock = styled.div`
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  overflow-y: scroll;
  height: 100%;
`;

const ImageBlock = styled.div`
  position: relative; /* важно, чтобы абсолютный элемент опирался на этого родителя */
  width: 100%;
  min-height: 375px;
`;

const Image = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
  display: block;
`;

const ImageContent = styled.div`
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* выше чем картинка */
  display: flex;
  flex-direction: column;
  align-items: start; /* чтобы текст был по центру горизонтали */
  justify-content: space-between; /* и по центру вертикали, либо как тебе нужно расположить */
  color: #fff; /* чтобы текст был заметен поверх картинки */
`;
const Content = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;
`;
