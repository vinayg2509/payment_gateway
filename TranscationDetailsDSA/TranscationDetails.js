class TranscationDetails
{
    constructor(transcationDetails=[])
    {
        this.transcationDetails=transcationDetails//*acts as transcation stack
    }

   
   // *to find number of transcation
    numberOfTranscation()
    {
        let countOfTranscation = 0;
        while (this.transcationDetails[countOfTranscation] != undefined) 
        {
            countOfTranscation++;
        }
        return countOfTranscation;
    }

    //*To add each transcation User
    pushTranscation(transcationDetail)
    {
        let numberOfTranscation=this.numberOfTranscation()
        this.transcationDetails[numberOfTranscation]=transcationDetail
        return this.numberOfTranscation()
    }

    transcationHistory()
    {
        console.log("Transaction History:");
        let numberOfTranscation = this.numberOfTranscation();
        let transcationDetails=" "
        if (numberOfTranscation == 0) 
            {
            console.log(`No transcation details found`);
            }
            else 
            {
            for (let index = 0; index <numberOfTranscation; index++) 
                {
                  transcationDetails +=this.transcationDetails[index];
                  if(index<numberOfTranscation-1)
                  {
                    transcationDetails+=","
                  }
                }
            }    
            console.log(`${transcationDetails}`);
    }
}
export default TranscationDetails