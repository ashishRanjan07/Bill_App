import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../components/WrapperContainer";
import InternalHeader from "../../components/InternalHeader";
import Data from "../../assets/json/PaymentHistory.json";
import { moderateScale, textScale } from "../../utils/ResponsiveSize";
import Colors from "../../utils/AppColor";
import FontFamily from "../../utils/FontFamily";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { showMessage } from "react-native-flash-message";

const PaymentHistory = () => {
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const generatePDF = async (item) => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .container {
              padding: 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .company-info {
              text-align: center;
              font-size: 18px;
              font-weight: bold;
              color: ${Colors.statusBarColor};
            }
            .company-address {
              text-align: center;
              font-size: 14px;
              color: #555;
            }
            .invoice-title {
              text-align: center;
              font-size: 22px;
              margin-top: 20px;
              font-weight: bold;
              color: ${Colors.black};
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            table th, table td {
              padding: 10px;
              text-align: left;
              border: 1px solid #ddd;
            }
            table th {
              background-color: ${Colors.statusBarColor};
              color: #fff;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #888;
            }
            .download-btn {
              background-color: ${Colors.statusBarColor};
              color: #fff;
              padding: 12px;
              text-align: center;
              width: 100%;
              margin-top: 20px;
              border-radius: 5px;
              font-weight: bold;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Company Information -->
            <div class="company-info">
              XYZ Corporation
            </div>
            <div class="company-address">
              1234 Elm St, City, State, 12345 | Phone: (123) 456-7890 | Email: info@xyzcorp.com
            </div>

            <!-- Invoice Title -->
            <div class="invoice-title">
              Payment Invoice
            </div>

            <!-- Invoice Details Table -->
            <table>
              <tr>
                <th>Account Id</th>
                <td>${item?.accountId}</td>
              </tr>
              <tr>
                <th>Payment Advice</th>
                <td>${item?.paymentAdvice}</td>
              </tr>
              <tr>
                <th>Payment Date</th>
                <td>${item?.paymentDate}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>${item?.amount}</td>
              </tr>
              <tr>
                <th>Currency</th>
                <td>${item?.currency}</td>
              </tr>
              <tr>
                <th>Reference Id</th>
                <td>${item?.referenceId}</td>
              </tr>
              <tr>
                <th>Payment Method</th>
                <td>${item?.paymentMethod}</td>
              </tr>
              <tr>
                <th>Invoice Date</th>
                <td>${item?.invoiceDate}</td>
              </tr>
              <tr>
                <th>Payer Name</th>
                <td>${item?.payerName}</td>
              </tr>
              <tr>
                <th>Recipient Name</th>
                <td>${item?.recipientName}</td>
              </tr>
              <tr>
                <th>Transaction Status</th>
                <td>${item?.transactionStatus}</td>
              </tr>
              <tr>
                <th>Payment Status</th>
                <td>${item?.paymentStatus}</td>
              </tr>
              <tr>
                <th>Transaction Fee</th>
                <td>${item?.paymentDetails?.transactionFee} ${
      item?.paymentDetails?.transactionFeeCurrency
    }</td>
              </tr>
              <tr>
                <th>Billing Address</th>
                <td>${item?.paymentDetails?.billingAddress}</td>
              </tr>
              <tr>
                <th>Payment Processor</th>
                <td>${item?.paymentDetails?.paymentProcessor}</td>
              </tr>
              <tr>
                <th>Additional Notes</th>
                <td>${item?.additionalNotes}</td>
              </tr>
            </table>

            <!-- Footer -->
            <div class="footer">
              Thank you for your business!
            </div>

            <!-- Download Button -->
            <div class="download-btn" onclick="window.print();">
              <FontAwesome5 name="file-pdf" size="${textScale(
                20
              )}" color="#fff" /> Download PDF
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      const options = {
        html: htmlContent,
        fileName: "payment_invoice",
        directory: "Documents",
      };
      const file = await RNHTMLtoPDF.convert(options);
      console.log("PDF generated at: ", file.filePath);
      showMessage({
        message: "Download Success check file",
        icon: "success",
        type: "success",
      });
    } catch (error) {
      console.error("Error generating PDF: ", error);
      showMessage({
        message: "Failed to generate PDF",
        icon: "danger",
        type: "danger",
      });
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedAccountId === item?.accountId;
    return (
      <TouchableOpacity
        key={item?.accountId}
        style={styles.itemHolder}
        onPress={() => setSelectedAccountId(item?.accountId)}
      >
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Account Id</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.accountId}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Payment Advice</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.paymentAdvice}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Payment Date</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.paymentDate}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Amount</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.amount}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Currency</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.currency}</Text>
          </View>
        </View>
        {isSelected && (
          <>
            <View style={styles.view}>
              <View style={styles.innerView}>
                <Text style={styles.text}>Reference Id</Text>
              </View>
              <View style={styles.innerView}>
                <Text style={styles.text}>{item?.referenceId}</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.innerView}>
                <Text style={styles.text}>Payment Method</Text>
              </View>
              <View style={styles.innerView}>
                <Text style={styles.text}>{item?.paymentMethod}</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={styles.innerView}>
                <Text style={styles.text}>Invoice Date</Text>
              </View>
              <View style={styles.innerView}>
                <Text style={styles.text}>{item?.invoiceDate}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => generatePDF(item)}
            >
              <FontAwesome5
                name="file-pdf"
                size={textScale(25)}
                color={Colors.red}
              />
              <Text style={styles.text2}>Download Invoice</Text>
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
      <InternalHeader title={"Payment History"} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data.paymentHistory}
          renderItem={renderItem}
          keyExtractor={(item, index) => item?.accountId}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </WrapperContainer>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  itemHolder: {
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
    elevation: moderateScale(10),
    backgroundColor: Colors.white,
    width: "95%",
    alignSelf: "center",
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5),
    padding: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  innerView: {
    width: "50%",
    padding: moderateScale(10),
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
  },
  text2: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.white,
    padding: moderateScale(10),
    fontSize: textScale(16),
    textTransform: "capitalize",
  },
  downloadButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: moderateScale(5),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.statusBarColor,
  },
});
