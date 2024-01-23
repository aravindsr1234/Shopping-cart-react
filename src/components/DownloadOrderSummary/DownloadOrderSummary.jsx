import easyinvoice from "easyinvoice";

const DownloadOrderSummary = ({data}) => {


    const downloadInvoice = async (datas) => {
        const data = {
          documentTitle: "INVOICE", //Defaults to INVOICE
          currency: "USD",
          taxNotation: "vat", //or gst
          marginTop: 25,
          marginRight: 25,
          marginLeft: 25,
          marginBottom: 25,
          logo: "link to show on your invoice",
          sender: {
            company: "Hotel",
            address: "4 W 13th St",
            zip: "10011",
            city: "New York",
            country: "United States",
          },
          client: {
            company: `${datas.userName}`,
            address: `${datas.billinAddress?.line1}`,
            zip: "",
            // city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
            //   "en-US"
            // )}`,
            // country: `Check In: ${new Date(booking.checkOutDate).toLocaleString(
            //   "en-US"
            // )}`,
          },
          invoiceNumber: `${datas._id}`,
          invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
        //   products: [
        //     {
        //       quantity: `${datas.daysOfStay}`,
        //       description: `${datas.room.name}`,
        //       tax: 0,
        //       price: datas.room.pricePerNight,
        //     },
        //   ],
          bottomNotice:
            "add message",
        };
      
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download(`invoice_.pdf`, result.pdf);
      };


    return (
        <div>
            <button onClick={() => downloadInvoice(data)}>Download</button>
        </div>
    );
};

export default DownloadOrderSummary;