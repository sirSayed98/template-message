import MessagesContainer from './messages-container';
import PhoneWrapper from './phone-wrapper';

export default function PreviewWrapper() {
  return (
    <>
      <h1 className="text-base mb-2 mt-5 text-center">
        Preview
        <PhoneWrapper>
          <MessagesContainer />
        </PhoneWrapper>
      </h1>
    </>
  )
}