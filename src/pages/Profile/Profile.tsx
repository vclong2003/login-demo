import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { removeUserToken } from "../../utils/storageUtils";
import { setUser } from "../../store/authSlice";
import * as S from "./Profile.styled";
import InfoItem from "./InfoItem/InfoItem";
import { imageUrl } from "../../utils/dataUtils";
import { convertDate } from "../../utils/dateUtils";
import Popup from "../../components/Popup/Popup";
import { useState } from "react";
import ReactCrop, { type Crop } from "react-image-crop";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const [crop, setCrop] = useState<Crop>();

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const onUpdateAvatarClick = () => setIsAvatarPopupOpen(true);

  const onLogout = () => {
    removeUserToken();
    dispatch(setUser(null));
  };

  return (
    <S.Container>
      <Popup
        onClose={() => setIsAvatarPopupOpen(false)}
        show={isAvatarPopupOpen}>
        <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
          <img src={(user?.avatar && imageUrl(user.avatar)) || ""} />
        </ReactCrop>
      </Popup>
      <S.Title>Your profile</S.Title>
      <S.LeftContainer>
        <InfoItem label="Id" value={user?.id.toString() || ""} />
        <InfoItem label="Email" value={user?.email || ""} />
        <InfoItem label="Name" value={user?.name || ""} />
        <InfoItem label="Gender" value={user?.gender || ""} />
        <InfoItem label="Region" value={user?.region.toString() || ""} />
        <InfoItem label="State" value={user?.state.toString() || ""} />
        <InfoItem
          label="Created at"
          value={(user?.createdAt && convertDate(user.createdAt)) || ""}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Avatar
          imageUrl={(user?.avatar && imageUrl(user.avatar)) || null}
          isUpdateable={true}
          onUpdateClick={onUpdateAvatarClick}
        />
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.RightContainer>
    </S.Container>
  );
}
