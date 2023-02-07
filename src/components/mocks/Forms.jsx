import { Checkbox, Grid, Input, Row, Col, Select } from "antd";
import Column from "antd/es/table/Column";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export const HistoryOptions = (props) => {
  return (
    <div>
      <Checkbox onChange={onChange}>an Bildschirmgröße anpassen</Checkbox>
      <br />
      <Checkbox onChange={onChange}>Historie halten</Checkbox>
      <br />
      <Checkbox onChange={onChange}>andere Option</Checkbox>
      <br />
    </div>
  );
};

export const HistoryDisplayOptions = (props) => {
  //   return <div>xxx</div>;
  return (
    <>
      <Row gutter={12}>
        <Col span={20} style={{ marginBottom: 12 }}>
          <Select
            defaultValue="Direkte Vorgänger/Nachfolger"
            style={{ width: "100%" }}
            options={[
              { value: "jack", label: "Direkte Vorgänger/Nachfolger" },
              { value: "lucy", label: "Vollständig" },
              { value: "Yiminghe", label: "Begrenzte Tiefe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col span={4}>
          <Input value="1"></Input>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            defaultValue="Alle Flurstücke"
            style={{ width: "100%" }}
            options={[
              { value: "jack", label: "Alle Flurstücke" },
              { value: "lucy", label: "Nur Vorgänger" },
              { value: "Yiminghe", label: "Nur Nachfolger" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};
export const HistoryInfo = (props) => {
  //   return <div>xxx</div>;
  const values = [
    { label: "Entstehung:", value: "12.10.2016" },
    { label: "Historisch seit:", value: "keine Angabe" },
    { label: "letzter Stadtbesitz:", value: "2.8.2019" },
  ];
  return (
    <>
      <Row gutter={12} style={{ marginBottom: 12 }}>
        {values.map((v, index) => (
          <>
            <Col key={"l." + index} span={12}>
              {v.label}
            </Col>
            <Col key={"v." + index} span={12}>
              {v.value}
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export const FlaechenDetailsEmpty = (props) => {
  //   return <div>xxx</div>;
  const values = [
    { label: "Entstehung:", value: "12.10.2016" },
    { label: "Historisch seit:", value: "keine Angabe" },
    { label: "letzter Stadtbesitz:", value: "2.8.2019" },
  ];
  const labelSpan = 7;
  const valueSpan = 17;
  const Label = ({ children }) => (
    <Col style={{ marginBottom: 8 }} span={labelSpan}>
      {children}
    </Col>
  );
  const Value = ({ children }) => (
    <Col style={{ marginBottom: 8 }} span={valueSpan}>
      {children}
    </Col>
  );

  return (
    <>
      <Row gutter={8}>
        <Label span={labelSpan}>Flächenbezeichnung:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Größe (Grafik):</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Größe (Korrektur):</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Flächenart:</Label>
        <Value span={valueSpan}>
          <Select style={{ width: "100%" }} />
        </Value>
        <Label span={labelSpan}>Anschlussgrad:</Label>
        <Value span={valueSpan}>
          <Select style={{ width: "100%" }} />
        </Value>
        <Label span={labelSpan}>Beschreibung:</Label>
        <Value span={valueSpan}>
          <Select style={{ width: "100%" }} />
        </Value>
        <Label span={labelSpan}>Anteil:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Änderungsdatum:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Veranlagungsdatum:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Bemerkung:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
        <Label span={labelSpan}>Querverweise:</Label>
        <Value span={valueSpan}>
          <Input />
        </Value>
      </Row>
    </>
  );
};
