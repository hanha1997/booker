import { Logger } from "@nestjs/common";
import { AbsTractDocument } from "./abstract.schema";
import { FilterQuery, Model, Types } from "mongoose";

export abstract class AbsTractRepository<TDocument extends AbsTractDocument> {
    protected abstract readonly logger: Logger
    constructor(protected readonly model: Model<TDocument>) {

    }

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createdDocument = new this.model({
            ...document,
            _id: new Types.ObjectId
        });
        return (await createdDocument.save()).toJSON() as unknown as TDocument;
    }

    async findOne(filterQuery: FilterQuery<TDocument>) : Promise<TDocument> {
        const document = await this.model.findOne(filterQuery, {}, {lean: true})
        if (!document) {
            this.logger.warn('Document not found with filter Query')
        }
        return document;
    }
}