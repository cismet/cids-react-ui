import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";
import RcResizeObserver from "rc-resize-observer";
import ProCard from "@ant-design/pro-card";
import { Space, Table, Image } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export const SimpleDocsCard = (props) => {
  const [canvasHeight, setCanvasHeight] = useState(800);
  const [canvasWidth, setCanvasWidth] = useState(800);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState(mockData.slice(0, 8));
  let i = 0;
  for (const file of fileList) {
    file.url = "https://picsum.photos/1600/1600?random=" + i++;
    //for a default title: remove the ending of the filename and split it up whereever a camelcase change is
    file.title = file.name.replace(/\.[^/.]+$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
    file.desc = "Ein beschreibender Text über die Datei " + file.name;
  }

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <ProCard title="Docs" style={{ height: props.height }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        style={{ height: 50, background: "red" }}
      >
        {fileList.length >= 80 ? null : uploadButton}
      </Upload>

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </ProCard>
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Datei",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Beschreibung",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Preview",
    key: "url",
    dataIndex: "url",
    render: (_, { url }) => {
      //return <img src={url} style={{ width: 100, height: 100 }} />;
      return <Image src={url} width={120} height={120} />;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a></a>
        <a></a>
      </Space>
    ),
  },
];

// const tableData=

export const DocsTable = (props) => {
  const [fileList, setFileList] = useState(mockData.slice(0, 40));
  let i = 0;
  for (const file of fileList) {
    file.url = "https://picsum.photos/1600/1600?random=" + i++;
    //for a default title: remove the ending of the filename and split it up whereever a camelcase change is
    file.title = file.name.replace(/\.[^/.]+$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
    file.desc = "Ein beschreibender Text über die Datei " + file.name;
  }
  return (
    <Table
      style={props.tableStyle}
      columns={columns}
      scroll={{ y: props.scrollHeight }}
      pagination={false}
      dataSource={fileList}
    />
  );
};

const mockData = [
  { uid: 1, name: "InterdumIn.avi" },
  { uid: 2, name: "Quam.jpeg" },
  { uid: 3, name: "EleifendQuamA.tiff" },
  { uid: 4, name: "LectusSuspendissePotenti.ppt" },
  { uid: 5, name: "EtMagnis.mp3" },
  { uid: 6, name: "Ligula.doc" },
  { uid: 7, name: "AnteVestibulumAnte.doc" },
  { uid: 8, name: "Sapien.avi" },
  { uid: 9, name: "NibhLigulaNec.ppt" },
  { uid: 10, name: "NecNisiVulputate.ppt" },
  { uid: 11, name: "Ipsum.mp3" },
  { uid: 12, name: "Pretium.doc" },
  { uid: 13, name: "TurpisA.tiff" },
  { uid: 14, name: "Porttitor.jpeg" },
  { uid: 15, name: "Bibendum.avi" },
  { uid: 16, name: "EratTortorSollicitudin.avi" },
  { uid: 17, name: "QuisTortor.ppt" },
  { uid: 18, name: "UtTellus.mp3" },
  { uid: 19, name: "FaucibusOrciLuctus.mp3" },
  { uid: 20, name: "Vulputate.avi" },
  { uid: 21, name: "EleifendQuamA.xls" },
  { uid: 22, name: "ErosViverraEget.mp3" },
  { uid: 23, name: "Fusce.mp3" },
  { uid: 24, name: "NamTristiqueTortor.pdf" },
  { uid: 25, name: "SuspendisseOrnare.avi" },
  { uid: 26, name: "AFeugiatEt.xls" },
  { uid: 27, name: "Lacus.mpeg" },
  { uid: 28, name: "EgetTempus.tiff" },
  { uid: 29, name: "Sapien.mpeg" },
  { uid: 30, name: "SemSed.ppt" },
  { uid: 31, name: "At.png" },
  { uid: 32, name: "MolestieHendreritAt.mpeg" },
  { uid: 33, name: "EtTempus.jpeg" },
  { uid: 34, name: "Sem.mp3" },
  { uid: 35, name: "NasceturRidiculus.jpeg" },
  { uid: 36, name: "EnimLoremIpsum.ppt" },
  { uid: 37, name: "NibhQuisqueId.jpeg" },
  { uid: 38, name: "EtMagnis.png" },
  { uid: 39, name: "DonecOdio.png" },
  { uid: 40, name: "Lectus.ppt" },
  { uid: 41, name: "VestibulumAcEst.pdf" },
  { uid: 42, name: "ElitAc.xls" },
  { uid: 43, name: "UtAtDolor.avi" },
  { uid: 44, name: "SapienNonMi.ppt" },
  { uid: 45, name: "AtLoremInteger.mp3" },
  { uid: 46, name: "AdipiscingElit.tiff" },
  { uid: 47, name: "LuctusEtUltrices.doc" },
  { uid: 48, name: "Quisque.doc" },
  { uid: 49, name: "FelisSed.mpeg" },
  { uid: 50, name: "VulputateJustoIn.jpeg" },
  { uid: 51, name: "Duis.xls" },
  { uid: 52, name: "Eu.xls" },
  { uid: 53, name: "LacusAtTurpis.png" },
  { uid: 54, name: "TortorSollicitudinMi.xls" },
  { uid: 55, name: "LuctusEtUltrices.jpeg" },
  { uid: 56, name: "Commodo.ppt" },
  { uid: 57, name: "OdioDonecVitae.mp3" },
  { uid: 58, name: "NisiNamUltrices.gif" },
  { uid: 59, name: "Ac.tiff" },
  { uid: 60, name: "MolestieSed.mp3" },
  { uid: 61, name: "Porttitor.ppt" },
  { uid: 62, name: "SapienQuisLibero.doc" },
  { uid: 63, name: "VestibulumVelitId.avi" },
  { uid: 64, name: "PraesentBlanditNam.doc" },
  { uid: 65, name: "Lobortis.txt" },
  { uid: 66, name: "Iaculis.tiff" },
  { uid: 67, name: "Morbi.png" },
  { uid: 68, name: "VelEst.txt" },
  { uid: 69, name: "UllamcorperPurus.mp3" },
  { uid: 70, name: "IdMassaId.mpeg" },
  { uid: 71, name: "Suspendisse.pdf" },
  { uid: 72, name: "SapienCumSociis.xls" },
  { uid: 73, name: "NibhIn.xls" },
  { uid: 74, name: "Vel.mp3" },
  { uid: 75, name: "LigulaSuspendisseOrnare.doc" },
  { uid: 76, name: "FuscePosuereFelis.ppt" },
  { uid: 77, name: "AliquamSit.doc" },
  { uid: 78, name: "TristiqueFusceCongue.mpeg" },
  { uid: 79, name: "AuctorSed.png" },
  { uid: 80, name: "EstEt.tiff" },
  { uid: 81, name: "Condimentum.doc" },
  { uid: 82, name: "IpsumPrimis.gif" },
  { uid: 83, name: "At.avi" },
  { uid: 84, name: "LacusMorbi.mp3" },
  { uid: 85, name: "Felis.xls" },
  { uid: 86, name: "JustoInHac.jpeg" },
  { uid: 87, name: "Est.gif" },
  { uid: 88, name: "VulputateNonummyMaecenas.ppt" },
  { uid: 89, name: "Vel.gif" },
  { uid: 90, name: "DapibusDuis.mpeg" },
  { uid: 91, name: "PedeMalesuadaIn.ppt" },
  { uid: 92, name: "NullamOrci.xls" },
  { uid: 93, name: "NuncCommodo.ppt" },
  { uid: 94, name: "NequeAenean.xls" },
  { uid: 95, name: "AeneanFermentumDonec.doc" },
  { uid: 96, name: "Volutpat.jpeg" },
  { uid: 97, name: "IpsumDolorSit.tiff" },
  { uid: 98, name: "TempusVel.txt" },
  { uid: 99, name: "VelIpsum.avi" },
  { uid: 100, name: "DonecUtDolor.xls" },

  // {
  //   uid: "-xxx",
  //   percent: 50,
  //   name: "image.png",
  //   status: "uploading",
  //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  // },
  // {
  //   uid: "-5",
  //   name: "image.png",
  //   status: "error",
  // },
];
