import * as React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled as muiStyled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PropTypes from 'prop-types';

const drawerBleeding = 56;

const Root = muiStyled('div')({
  backgroundColor: grey[100],
});

const StyledBox = muiStyled('div')({
  backgroundColor: '#fff',
  borderRadius: '16px 16px 0px 0px',
});

const Puller = muiStyled('div')({
  marginTop: 16,
  marginBottom: 16,
  width: 32,
  height: 4,
  backgroundColor: '#636364',
  borderRadius: 3,
  marginLeft: 'calc(50% - 15px)',
  overflow: 'hidden',
});

function PlaceDescDrawer(props) {
  const { window, open, handleCloseDrawer, desc } = props;

  const [, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            overflow: 'visible',
            borderRightColor: 'transparent',
            backgroundColor: '#fff',
            borderRadius: '16px 16px 0px 0px',
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={handleCloseDrawer}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        ></StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, overflow: 'auto' }}>
          <Puller onClick={() => setOpen(true)} />

          <DrawerContent desc={desc} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

PlaceDescDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default PlaceDescDrawer;

const Wrapper = styled.div`
  margin: 0;

  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  align-self: stretch;
`;

const Title = styled.p`
  margin: 0;
  color: #424242;
  font-size: 18px;
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 0;

  font-size: 14px;
  color: #424242;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  margin-top: 4px;
`;

export function DrawerContent({ desc }) {
  return (
    <Wrapper>
      <Title>Описание Pizza</Title>
      <Desc>{desc}</Desc>
    </Wrapper>
  );
}
