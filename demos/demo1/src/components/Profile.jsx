
const Profile = (props)=> {
    const {src = "https://pixabay.com/zh/"} = props
    return (
        <img
        src={src}
        width="100"
        height="100"
      />
    )
}

export default Profile