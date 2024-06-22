import ieee from '../../src/assets/images/VolunteerLogos/ieee.svg'
import aiesec from '../../src/assets/images/VolunteerLogos/Aiesec.png'
import aiesec_cs from '../../src/assets/images/VolunteerLogos/aiesec-cs.jpg'
import ieee_extreme from '../../src/assets/images/VolunteerLogos/ieee-extreme.jpg'

import zp from '../../src/assets/images/VolunteerLogos/zp.png'
import g17 from '../../src/assets/images/VolunteerLogos/g17.png'
import yp from '../../src/assets/images/VolunteerLogos/yp.png'
import ieee_susl from '../../src/assets/images/VolunteerLogos/ieee-susl.png'
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { SiIeee } from "react-icons/si";

const VolunteerInfo = [
  {
    organization: '',
    date: 'May 2021 - Jan 2022',
    role: 'OGT Team Leader | AIESEC in Sabaragamuwa',
    icon: <MdOutlineVolunteerActivism />,
    image: aiesec
  },
  {
    organization: '',
    date: 'Oct 2021 - Dec 2021',
    role: 'Organizing Committee Member - Partnership Development - Qualifier 1.0 | AIESEC in CC',
    icon: <MdOutlineVolunteerActivism />,
    image: aiesec_cs
  },
  {
    organization: '',
    date: 'Feb 2022 - Aug 2022',
    role: 'IGVP Digital Experience and Marketing - Management Board 22.23 | AIESEC in Sabaragamuwa',
    icon: <MdOutlineVolunteerActivism />,
    image: aiesec
  },
  {
    organization: '',
    date: 'Mar 2022 - Mar 2023',
    role: 'Delegates Management Team Member | SLSAC',
    icon: <SiIeee size="2x" />,
    image: ieee
  },
  {
    organization: '',
    date: 'Apr 2022 - Sep 2023',
    role: 'Director of PR/Operations | ZeroPlastic Community of SUSL',
    icon: <MdOutlineVolunteerActivism />,
    image: zp
  },
  {
    organization: '',
    date: 'Apr 2022 - Apr 2023',
    role: 'Designer | G17 Global UAC',
    icon: <MdOutlineVolunteerActivism />,
    image: g17
  },
  {
    organization: '',
    date: 'Oct 2022 - Aug 2023',
    role: 'Event Coordinator | IEEE Student Branch of SUSL',
    icon: <SiIeee size="2x" />,
    image: ieee_susl
  },
  {
    organization: '',
    date: 'Aug 2022 - Mar 2023',
    role: 'Student Representative for StudPro 5.0 | IEEE Young Professionals Sri Lanka',
    icon: <SiIeee size="2x" />,
    image: yp
  },
  {
    organization: '',
    date: 'Mar 2023 - Dec 2023',
    role: 'IEEEXtreme | Ambassador for SUSL',
    icon: <SiIeee size="2x" />,
    image: ieee_extreme
  },
  {
    organization: '',
    date: 'Mar 2023 - Dec 2023',
    role: 'IEEE Young Professionals Sri Lanka | Membership Coordinator',
    icon: <SiIeee size="2x" />,
    image: yp
  }
];

export default VolunteerInfo;


