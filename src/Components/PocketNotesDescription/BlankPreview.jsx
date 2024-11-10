import previewBg from '../../assets/notes-preview.svg';
import encrypt from '../../assets/lock-icon.svg';
import './BlankPreview.css'

const BlankPreview = () => {

  return (
    <div className='blankpage-preview' >
        <div className='preview-img' >
            <img src={previewBg} alt="preview" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className='end-to-end-encryp' >
            <img src={encrypt} alt="encrypt" />
            <p>end-to-end encrypted</p>
        </div>
    </div>
  )
}

export default BlankPreview