import { LinkCopyIcon } from '@/shared/icons/community/link-copy-icon';
import { Toast } from '@/shared/toast';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#fff',
    },
  },
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #00a3ff;
  font-weight: 500;
  gap: 12px;
  margin-top: 24px;
  background-color: #fff;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  filter: drop-shadow(0px 8px 25px rgba(0, 0, 0, 0.05));
`;

export const LinkCopy = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Toast
          open={true}
          sx={{ backgroundColor: 'white', color: '#424242', marginBottom: '80px' }}
          vertical="bottom"
          horizontal="center"
          
        >
          <Wrapper>
            <IconWrapper>
              <LinkCopyIcon />
            </IconWrapper>
            <p>Пригласить по ссылке</p>
          </Wrapper>
        </Toast>
      </ThemeProvider>
    </div>
  );
};
