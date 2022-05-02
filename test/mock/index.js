export const VALID_MOCK = {
    Report: [
      {
        B: 'Fix version',
        C: 'Worklog',
        D: 'Key',
        E: 'Logged',
        F: 'Date',
        G: 'Activity'
      },
      {
        A: '',
        C: 'Conversation with the backend team',
        D: 'EV-21',
        E: '30m',
        F: '04/01/2022 at 08:00',
        G: 'Meeting'
      },
      { A: '', B: 'Access restricted', E: '1864h 30m' },
      { A: 'Total', D: '', E: '2032h 30m', F: '', G: '' }
    ]
  }
export const REMOVE_UNUSEDS = [
    {
      A: '',
      C: 'Conversation with the backend team',
      D: 'EV-21',
      E: '30m',
      F: '04/01/2022 at 08:00',
      G: 'Meeting'
    }
]

export const FORMAT_NAMES = [
  {
    Date: '01/04/2022',
    'Finance Project # ': 578,
    'Finance Project Name ': 'Trilogy Go (Enhancements) 2022 Q1',
    Description: 'Conversation with the backend team',
    Task: 'Meeting',
    Hours: '30m',
    Rate: '',
    Dept: '290 - Loyalty Development',
    'Customer (if applicable) ': ''
  }
]
export const PREPARE_TO_XLSX = [
  {
    sheet: 'Sheet1',
    columns:[
      {
        "Customer (if applicable) ":"",
        "Date":"",
        "Dept":"290 - Loyalty Development",
        "Finance Project # ":578,
        "Finance Project Name ":"Trilogy Go (Enhancements) 2022 Q1",
        "Rate":"",
      },
    ],
    content: FORMAT_NAMES
  }
]
export const EXPECTED_FINAL_DATA = PREPARE_TO_XLSX