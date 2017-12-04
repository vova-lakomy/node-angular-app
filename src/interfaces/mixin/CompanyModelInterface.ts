import { Document } from 'mongoose';
import { CompanyInterface } from '../CompanyInterface';

export interface CompanyModelInterface extends CompanyInterface, Document {
}
