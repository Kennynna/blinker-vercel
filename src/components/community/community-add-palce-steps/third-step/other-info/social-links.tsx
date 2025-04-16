import { PlusIcon } from '@/shared/icons/community/plus-icon';
import styled from '@emotion/styled';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';



import { EditIcon } from '@/components/community/icons/edit';





const Wrapper = styled.div`
  font-size: 14px;
  border-radius: 16px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  padding-right: 16px;
`;

const StyledInput = styled(InputBase)`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: #f9f9f9;
  color: #424242;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #958a8a;
    font-size: 14px;
  }

  /* Ensure font size is applied on all browsers */
  & input {
    font-size: 14px !important;
  }
`;

export const SocialLinks = ({ socialLinks, updateSocialLinks }) => {
  const handleChange = (index, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    updateSocialLinks(updatedLinks);
  };

  const addNewLink = () => {
    updateSocialLinks([...socialLinks, '']);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        {socialLinks.map((link, index) => (
          <Wrapper>
            <StyledInput
              key={index}
              placeholder="Ссылка"
              value={link}
              onChange={(e) => handleChange(index, e.target.value)}

            />
            <EditIcon />
          </Wrapper>
        ))}
        <Wrapper>
          <StyledInput placeholder="Добавить" disabled={true} />
          <PlusIcon color="#958A8A" onClick={addNewLink} />
        </Wrapper>
      </Box>
    </>
  );
};
