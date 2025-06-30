import MessagesContainer from './messages-container'
import PhoneWrapper from './phone-wrapper'

export default function PreviewWrapper() {
  return (
    <>
      <h1 className='text-base mb-2 mt-5 text-center'>
        Preview
        <PhoneWrapper>
          <MessagesContainer />
          <div className='absolute bottom-10 left-0 right-0 mb-2 h-3 ml-2 mr-2'>
            <div className='bg-white h-10 rounded-3xl'></div>
          </div>
        </PhoneWrapper>
      </h1>
    </>
  )
}
