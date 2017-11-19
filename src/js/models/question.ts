import Status from 'app/models/status';



/*export interface Question {
  id?: number;
  type: QuestionType;
  title: string;
  description?: string;
  answers: Answer[];
  answered?: boolean;
  track: Track;
  status: Status;
}*/

export interface Question {
  id?: number;
  title: string;
  description?: string;
  status: Status;
}


export default Question;
