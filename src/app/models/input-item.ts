import { InputType } from '../enums/input-type.enum';

export class InputItem {
    public id: string;
    public labelText: string;
    public inputType: InputType;
    public inputValue: string;
}
