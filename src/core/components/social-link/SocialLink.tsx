import React from 'react'
import './social-link.scss'
import { IconsEnum } from '../../models/icons'
import InstagramIcon from '../../../assets/images/social/instagram.svg'
import YoutubeIcon from '../../../assets/images/social/youtube.svg'
import VkIcon from '../../../assets/images/social/vk.svg'
import FacebookIcon from '../../../assets/images/social/facebook.svg'

interface IProps {
  link: string
  icon: string
}

const SocialLink = ({ link, icon } : IProps) => {

  const iconRendered = (icon: string) => {
    switch (icon) {
      case IconsEnum.instagram:
        return <img src={ InstagramIcon } alt={ IconsEnum.instagram } />

      case IconsEnum.youtube:
        return <img src={ YoutubeIcon } alt={ IconsEnum.youtube } />

      case IconsEnum.vk:
        return <img src={ VkIcon } alt={ IconsEnum.vk } />

      case IconsEnum.facebook:
        return <img src={ FacebookIcon } alt={ IconsEnum.facebook } />

      default:
        break
    }
  }

  return (
    <a
      href={ link }
      target="_blank"
      className="social__link"
      rel="noopener noreferrer"
    >
      { iconRendered(icon) }
    </a>
  )
}

export default SocialLink
