import React from 'react';
import ContentContainer from '../../core/layouts/content-container/ContentContainer';
import { TLook } from '../../core/models/look';

interface IProps {
  look: TLook | null
}

const LookPageContent = ({ look }: IProps) => {
  return (
    <ContentContainer>
      <div>
        <h2>Look</h2>
        <ul>
          <li>id: { look?.id }</li>
          <li>name: { look?.name }</li>
          <li>description: { look?.description }</li>
          <li>gender: { look?.gender }</li>
          <li>constitution: { look?.constitution }</li>
          <li>event: { look?.event }</li>
          <li>tone: { look?.tone }</li>
          <li>priceCategory: { look?.priceCategory }</li>
          <li>price: { look?.price }</li>
          <li>isBookmarkedLook: { look?.isBookmarkedLook.toString() }</li>
          <li>isLikedLook: { look?.isLikedLook.toString() }</li>
        </ul>
      </div>
    </ContentContainer>
  )
};

export default LookPageContent;