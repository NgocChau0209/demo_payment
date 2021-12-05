import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button'
import TextInput from '../../components/Input/TextInput';

const SuccessLink = () => {
      const router = useRouter()
      const { token } = router.query;
      let [baseUrl, setBaseUrl] = useState('')

      useEffect(() => {
            const host = window.location.host;
            setBaseUrl(`${host}`);
      }, []);

      function handleCopyText() {
            let copyTextBtn = document.getElementById('copyTextButton');
            copyTextBtn.addEventListener('click', function (event) {
                  var copyTextarea = document.getElementById('deposit-link');
                  copyTextarea.focus();
                  copyTextarea.select();

                  try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Copy link thành công ');
                  } catch (err) {
                        console.log('Chưa copy được link');
                  }
            });
      }

      return (
            <div>
                  <TextInput name="deposit-link" value={`${baseUrl}/transaction/deposit-link?token=${token}`}></TextInput>
                  <Button text="Copy link" onClickEvent={handleCopyText} idElm="copyTextButton" />
            </div>
      )
}

export default SuccessLink
