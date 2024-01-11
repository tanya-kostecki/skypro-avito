import React, { useState } from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import Products from '../products/Products';
import {
  useUpdateUserInfoMutation,
  useUploadUserAvatarMutation,
} from '../../services/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUser } from '../../types';
import { baseUrl } from '../../api/AdvApi';
import { ErrorMessage } from '../error/ErrorMessage';
import { useGetCurrentUserAdvertsQuery } from '../../services/adverts';

interface Props {
  user: IUser;
}

const ProfileInfo = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<IUser>({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      city: user.city,
      phone: user.phone,
    },
  });

  const [updateUserApi, { isLoading }] = useUpdateUserInfoMutation();

  const changeProfileInfo: SubmitHandler<IUser> = async (data) => {
    try {
      await updateUserApi(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const [avatar, setAvatar] = useState<string>(`${baseUrl}${user?.avatar}`);

  const [uploadAvatarApi] = useUploadUserAvatarMutation();

  const uploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
      uploadAvatarApi(file).unwrap();
    }
  };

  const { data: currentUserAdverts } = useGetCurrentUserAdvertsQuery(null);

  return (
    <ProductsContainer>
      <S.ProfileIntoTitle>Здравствуйте, {user?.name}!</S.ProfileIntoTitle>

      <S.ProfileSettings>
        <S.ProfileSettingsTitle>Настройки профиля</S.ProfileSettingsTitle>
        <S.ProfileSettingsBlock>
          <S.AvatarBlock>
            {user?.avatar ? <S.AvatarImg src={avatar} /> : <S.AvatarImg />}
            <S.ChangeAvatar>Заменить
              <S.ChangeAvatarInput
                type="file"
                accept="image/*"
                id="avatar"
                name="file"
                onChange={(event) => uploadAvatar(event)}
              ></S.ChangeAvatarInput>
            </S.ChangeAvatar>
          </S.AvatarBlock>
          <S.InputForm onSubmit={handleSubmit(changeProfileInfo)}>
            <S.InputNameSurname>
              <S.InputBlockName>
                <S.InputBlockLabel>Имя</S.InputBlockLabel>
                {user?.name ? (
                  <S.NameInput
                    defaultValue={user.name}
                    placeholder="Name"
                    type="text"
                    {...register('name', {
                      required: 'Поле не может быть пустым',
                    })}
                  />
                ) : (
                  <S.NameInput />
                )}
              </S.InputBlockName>
              <S.InputBlockName>
                <S.InputBlockLabel>Фамилия</S.InputBlockLabel>
                {user?.surname ? (
                  <S.NameInput
                    defaultValue={user.surname}
                    placeholder="Surname"
                    type="text"
                    {...register('surname')}
                  />
                ) : (
                  <S.NameInput />
                )}
              </S.InputBlockName>
            </S.InputNameSurname>
            {errors.name && <ErrorMessage message={errors.name.message} />}
            <S.InputBlockName>
              <S.InputBlockLabel>Город</S.InputBlockLabel>
              {user?.city ? (
                <S.NameInput
                  defaultValue={user.city}
                  placeholder="City"
                  type="text"
                  {...register('city')}
                />
              ) : (
                <S.NameInput />
              )}
            </S.InputBlockName>
            <S.InputBlockName>
              <S.InputBlockLabel>Телефон</S.InputBlockLabel>
              <S.InputPhone
                placeholder="Phone number"
                {...register('phone', {
                  pattern: {
                    value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: 'Введите корректный номер телефона',
                  },
                })}
              />
            </S.InputBlockName>
            {errors.phone && <ErrorMessage message={errors.phone.message} />}
            {isLoading ? (
              <S.SaveButton disabled={true} style={{ background: 'grey' }}>
                ...Обновление
              </S.SaveButton>
            ) : (
              <>
                {isDirty ? (
                  <S.SaveButton type="submit" disabled={false}>
                    Сохранить
                  </S.SaveButton>
                ) : (
                  <S.SaveButton
                    type="submit"
                    disabled={true}
                    style={{ background: 'grey' }}
                  >
                    Сохранить
                  </S.SaveButton>
                )}
              </>
            )}
          </S.InputForm>
          <S.SettingsBlockInputs></S.SettingsBlockInputs>
        </S.ProfileSettingsBlock>
      </S.ProfileSettings>

      <ProductsTitle>Мои товары</ProductsTitle>
      <Products products={currentUserAdverts} />
    </ProductsContainer>
  );
};

export default ProfileInfo;
