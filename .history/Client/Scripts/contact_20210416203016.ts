// Contact Class

namespace core
{
  export class Contact 
  {
    // Instance Variables
    private m_fullName: string;
    private m_contactNumber: string;
    private m_emailAddress: string;
    private m_message: string;

    // getters and setters
    get FullName(): string 
    {
      return this.m_fullName;
    }
  
    set FullName(value:string) 
    {
      this.m_fullName = value;
    }
  
    get ContactNumber(): string 
    {
      return this.m_contactNumber;
    }
  
    set ContactNumber(value:string) 
    {
      this.m_contactNumber = value;
    }
  
    get EmailAddress() :string
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value:string) 
    {
      this.m_emailAddress = value;
    }

    get Message(): string 
    {
      return this.m_message;
    }
  
    set Message(value:string) 
    {
      this.m_message = value;
    }
  
    // constructor

    /**
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     * @param {string} message
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "", message = "") 
    {
      this.FullName = fullName;
      this.ContactNumber = contactNumber;
      this.EmailAddress = emailAddress;
      this.Message = message;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     */
    public toString(): string 
    {
      return `Full Name     : ${this.FullName} \nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}\nMessage : ${this.Message}`;
    }

    /**
     * This method returns a JSON object made up of the properties of the Contact class
     *
     * @returns {Object}
     */
    public toJSON():Object
    {
      return {
        "FullName": this.FullName,
        "ContactNumber": this.ContactNumber,
        "EmailAddress": this.EmailAddress,
        "Message" : this.Message
      }
    }

    /**
     * This method takes a JSON data object and assigns the values to the Contact class properties
     *
     * @param {Object} data
     * @returns {void}
     */
    public fromJSON(data: any): void
    {
      this.FullName = data.FullName;
      this.ContactNumber = data.ContactNumber;
      this.EmailAddress = data.EmailAddress;
      this.Message = data.Message;
    }

    /**
     * This method converts the Contact into a comma-separated value string
     *
     * @returns {string}
     */
    public serialize(): string
    {
      if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "" && this.Message != "")
      {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress},${this.Message}`;
      }
      else 
      {
        console.error("One or more properties of the Contact is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class properties
     *
     * @param {string} data
     * @return {void}
     */
    public deserialize(data: string): void
    {
      let propertyArray: string[] = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];
      this.Message = propertyArray[3];
    }
  }

}

