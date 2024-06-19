import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '568f630c-8e13-4709-b23a-1e352c5c0b37', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps}  style={{height: '100%'}} />
    </div>
    )
}
export default ChatsPage