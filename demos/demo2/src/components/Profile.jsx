
const Profile = (props)=> {
    return (
        <>
        <div>
          这是头部
          {props.header && props.header}
        </div>
        <div>
          这是内容
          {props.content && props.content}
        </div>
        <div>
          这是页脚
          {props.footer && props.footer}
        </div>
        
        </>
    )
}

export default Profile