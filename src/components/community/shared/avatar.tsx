import Avatar from '@mui/material/Avatar';

interface UserAvatarProps {
  imgUrl?: string;
  alt?: string;
  sx?: object;
}

export const UserAvatar = ({ imgUrl,  alt, sx }: UserAvatarProps) => {
  return <Avatar alt={alt || 'user'} src={imgUrl} sx={{ height: '48px', width: '48px', bgcolor: imgUrl ? '' : '#958A8A', ...sx }} />;
};
