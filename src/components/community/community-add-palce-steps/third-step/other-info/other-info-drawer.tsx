import * as React from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { Global } from '@emotion/react';
import { TextareaAutosize, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/system';



import ModalSaveText from '@/components/community/shared/modal-save-text';



import { Button, ButtonBlock } from '../third-step-new-card-place';
import { SocialLinks } from './social-links';


const Textarea = styled(TextareaAutosize)(
  `
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: #F9F9F9;
  color: #424242;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* firefox */
  &:focus-visible {
    outline: 0;
  }
  &::placeholder {
    color: #958A8A;
  }
`
);

const TitleInput = styled(Typography)(
  `
color: #958A8A;

font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 12px;
margin-top: 24px;
  `
);

export default function OtherInfoDrawer({ setOtherInfo, otherInfo, title, children, infoDrawer }: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempInfo, setTempInfo] = React.useState(otherInfo);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
    setTempInfo({
      ...tempInfo,
      [name]: event.target.value,
    });
  };

  const updateSocialLinks = (newLinks: string[]) => {
    setTempInfo({
      ...tempInfo,
      socials: newLinks,
    });
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(open);
    if (open) {
      setTempInfo(otherInfo);
    }
  };

  const handleCloseAndReset = () => {
    setIsOpen(false);
    setTempInfo(otherInfo);
  };

  const handleSaveText = () => {
    const cleanedInfo = {
      ...tempInfo,
      phone: tempInfo.phone.trim(),
      site: tempInfo.site.trim(),
      socials: tempInfo.socials.filter((link) => link.trim() !== ''),
    };
    setOtherInfo(cleanedInfo);
    setIsOpen(false);
  };

  const drawerContent = (
    <Box sx={{ width: '100%', backgroundColor: '#fff', minHeight: '100%' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
            backgroundColor: '#fff !important',
            padding: '16px',
            color: '#424242',
          },
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '16px',
          fontWeight: 700,
          justifyContent: 'space-between',
        }}
      >
        <ModalSaveText handleCloseAndReset={handleCloseAndReset}>
          <ArrowLeftIcon />
        </ModalSaveText>
        <p style={{ flex: 1, textAlign: 'center' }}>{title}</p>
        {infoDrawer}
      </Box>

      <Box
        sx={{
          marginTop: '54px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <TitleInput>Телефон</TitleInput>
      </Box>
      <Textarea
        placeholder="Контактный телефон"
        onChange={(e) => handleChange(e, 'phone')}
        name="phone"
        value={tempInfo.phone}
      />
      <TitleInput>Сайт</TitleInput>
      <Textarea
        placeholder="Ссылка на сайт"
        onChange={(e) => handleChange(e, 'site')}
        name="site"
        value={tempInfo.site}
      />
      <TitleInput>Ссылки на социальные сети</TitleInput>
      <SocialLinks socialLinks={tempInfo.socials} updateSocialLinks={updateSocialLinks} />
      <ButtonBlock onClick={handleSaveText}>
        <Button>
          <p>Сохранить</p>
        </Button>
      </ButtonBlock>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)}>{children}</div>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          backgroundColor: '#fff',
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
}
