import easyinvoice from "easyinvoice";

const DownloadOrderSummary = ({ data }) => {


  const downloadInvoice = async (datas) => {

    const data = {
      documentTitle: "INVOICE",
      currency: "USD",
      taxNotation: "vat",
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "link to show on your invoice",
      sender: {
        company: `${datas.userName}`,
        address: `${datas.billingAddress?.line1}`,
        zip: `${datas.billingAddress?.postal_code}`,
        city: `${datas.billingAddress?.city}`,
        country: `${datas.billingAddress?.country}`,
      },
      client: {
        company: `${datas.userName}`,
        address: `${datas.shippingAddress?.line1}`,
        zip: `${datas.shippingAddress?.postal_code}`,
        city: `${datas.shippingAddress?.city}`,
        country: `${datas.shippingAddress?.country}`,
      },
      invoiceNumber: `${datas._id}`,
      invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
      products:
        datas.cartData.map((data) => (
          {
            quantity: 1,
            description: data.productName,
            tax: 0,
            price: datas.totalPrice,
          }
        ))
      ,
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