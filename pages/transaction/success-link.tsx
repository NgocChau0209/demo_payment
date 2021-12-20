import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Button from 'components/Button/Button'
import TextInput from 'components/Input/TextInput';

const SuccessLink = () => {
      const router = useRouter()
      const { token } = router.query;
      const [baseUrl, setBaseUrl] = useState('');

      useEffect(() => {
            const host = window.location.host;
            setBaseUrl(`${host}`);
      }, []);

      function handleCopyText() {
            let copyTextBtn = document.getElementById('copyTextButton');
            if (copyTextBtn) {
                  copyTextBtn.addEventListener('click', function () {
                        var copyTextarea = document.getElementById('deposit-link');
                        if (copyTextarea) {
                              copyTextarea.focus();
                              copyTextarea.select();
                              document.execCommand('copy');
                        }
                  });
            }

      }

      return (
            <div>
                  <TextInput name="deposit-link" value={`${baseUrl}/transaction/deposit-link?token=${token}`} />
                  <Button text="Copy link" onClickEvent={handleCopyText} idElm="copyTextButton" />
            </div>
      )
}

export default SuccessLink
