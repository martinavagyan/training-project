

export default abstract class Base {

     model : any;

    constructor(_model : any) {
        this.model = _model;
    }
    public getAll = (req: any, res: any) => {
        console.log("knock knock");
        this.model.find({}, (err:any, docs:any) => {
            if (err) {return console.error(err);}
            res.json(docs);
        });
    }
    public insert = (req: any , res: any) => {
        const obj = new this.model(req.body);
        obj.save( (err:any, item:any) => {
            if (err) return console.error(err);
            res.status(200).json(item);
        });
    }
    public delete = (req: any, res: any) => {
        this.model.findOneAndRemove( {id: req.params.id}), (err: any, obj:any) => {
            if (err) return console.error(err);
            res.sendStatus(200);
        }
    }
    public  update = (req: any, res: any)=> {
        this.model.findOneAndUpdate({id : req.params.id}, req.body, (err:any) => {
            if (err) return console.error(err);
            res.sendStatus(200);
        })
    }
    public get = (req: any, res: any) => {
        console.log('###########',req.params.visitorId);
        this.model.findOne( {'visitorId': req.params.visitorId}, function(err:any, obj:any) {
            if (err) return console.error(err);
            res.json(obj);
        });
    }
}

