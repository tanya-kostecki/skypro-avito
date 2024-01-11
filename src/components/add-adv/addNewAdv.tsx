import React from 'react';
import * as S from '../modals/adv-settings/settings.styles';
import {
  useAddAdvWithoutImageMutation,
} from '../../services/adverts';
import { useForm } from 'react-hook-form';
// import { IAdv } from '../../types';

type Props = {
  setNewAdv: (newAdv: boolean) => void;
};

interface AdvForm {
  title: string;
  description: string;
  price: number;
}
const AddNewAdv = ({ setNewAdv }: Props) => {
  const closeNewAdv = () => {
    setNewAdv(false);
  };

  const [addAdvWithoutImg] = useAddAdvWithoutImageMutation();
  // const [addImgToAdv] = useAddImageToAdvMutation();
  const { register, handleSubmit } = useForm<AdvForm>();
  // const [advImg, setAdvImg] = useState<File[]>([]);

  const addNewAdv = async (data: AdvForm) => {
    const { title, description, price } = data;
    addAdvWithoutImg({ title, description, price })
      .unwrap()
      .then((response) => {
        console.log('response-ok', response);
      });
  };

  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closeNewAdv}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.SettingsTitle>Новое объявление</S.SettingsTitle>
        <form onSubmit={handleSubmit(addNewAdv)}>
          <S.SettingsInfo>
            <div>
              <S.SettingsName>Название</S.SettingsName>
              <S.SettingsNameBlock
                id="title"
                type="text"
                placeholder="Введите название"
                {...register('title', {
                  required: 'Поле не может быть пустым',
                })}
              />
            </div>
            <div>
              <S.SettingsName>Описание</S.SettingsName>
              <S.SettingsDescriptionBlock
                id="description"
                placeholder="Введите описание"
                {...register('description')}
              />
            </div>
            <div>
              <S.SettingsName>Фотографии товара</S.SettingsName>
              <S.SettingsImagesBlock>
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
                <S.SettingsImg />
              </S.SettingsImagesBlock>
            </div>
          </S.SettingsInfo>
          <S.SettingsPrice>
            <S.SettingsName>Цена</S.SettingsName>
            <S.SettingsPriceBlock
              id="price"
              placeholder=" "
              {...register('price')}
            ></S.SettingsPriceBlock>
          </S.SettingsPrice>
          <S.SettingsButton type="submit">Сохранить</S.SettingsButton>
        </form>
      </S.SettingsMain>
    </S.SettingsContainer>
  );
};

export default AddNewAdv;
