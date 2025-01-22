import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter10/1.jpg'
import image2 from '../../assets/chapterImage/chapter10/2.jpg'
import image3 from '../../assets/chapterImage/chapter10/3.jpg'
import image4 from '../../assets/chapterImage/chapter10/4.jpg'

function Chapter10({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nang hindi kumanta ang Ibong Adarna, naalala ng hari ang __________ tungkol sa kanyang bunsong anak na pinaslang."}
        fibAnswer={"panaginip"}
        mcQuestion={'Ano ang nangyari sa hari pagkatapos makita ang Ibong Adarna?'}
        mcChoices={['Mas gumaan ang pakiramdam ng hari','Lumala ang kanyang sakit','Nawala ang sakit ng hari','Naging malakas at masigla ang hari']}
        mcAnswer={'Lumala ang kanyang sakit'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'karamdaman'}
        summary={'Bumalik ng palasyo ang magkapatid na sina Don Pedro at Don Diego. Bagama’t nakaratay parin ay pinilit ni Don Fernando na bumangon upang mayakap ang dalawang anak na matagal nang nawalay sa kanya. Nanlumo ito nang malaman na hindi kasama ng magkapatid ang bunsong anak na si Don Juan. \n\nTinanong ng hari sa magkapatid kung nasan si Don Juan ngunit ang tanging sagot nila ay hindi nila alam. Iniharap ng magkapatid sa hari ang Ibong Adarna. Ngunit nabigla ito dahil pangit at lulugo-lugo ang itsura ng ibon. Tiyak ng hari na sa itsura na iyon ng Ibong Adarna ay imbes na mapapagaling ng awit nito ang may sakit ay mas lalo pang lulubha. \n\nSa pag-aalala ay muling nanariwa ang panaginip ng hari tungkol sa kanyang bunsong anak na pinaslang ng dalawang buhong. Lumipas ang mga araw at mas lalo pang lumubha ang sakit ng hari. Ang Ibong Adarna ay ayaw pa ring kumanta dahil wala ang totoong nagmamay-ari sa kanya na si Don Juan. Maging ang Ibong Adarna ay umaasa na buhay pa ang prinsipe at matutuklasan din ng hari at reyna ang pagtataksil na ginawa ng dalawa pa nilang anak.'}
        num={num}
         />
    </div>
  )
}

export default Chapter10