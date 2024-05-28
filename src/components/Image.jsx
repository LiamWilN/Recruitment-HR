
export const LogoImage = ({ props }) => {
  return ( <img src={props.URL} alt={props.ALT} className='size-12'/> )
}

export const RecruitmentImage = ({ src, alt }) => {
  return ( <img src={src} alt={alt} className="size-80" /> )
}