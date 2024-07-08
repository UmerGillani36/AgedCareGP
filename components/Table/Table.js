import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { DataTable, Text } from "react-native-paper";
import { colors } from "../../resources/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const Table = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      title: "Pathology Report",
      date: "1/5/24",
    },
    {
      key: 2,
      title: "X-ray Report",
      date: "1/3/24",
    },
    {
      key: 3,
      title: "Pathology Report",
      date: "1/3/24",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView horizontal>
      <DataTable style={{ minWidth: "100%" }}>
        <DataTable.Header>
          <DataTable.Title style={{ minWidth: 180 }}>
            <Text style={{ fontWeight: "bold" }}>Title</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 70 }}>
            <Text style={{ fontWeight: "bold" }}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={{ fontWeight: "bold" }}>Open</Text>
          </DataTable.Title>
        </DataTable.Header>

        {items.map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell style={{ minWidth: 180 }}>
              {item.title}
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 70 }}>
              {item.date}
            </DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: colors.teal100 }}
              >
                <AntDesign name="right" size={18} color={"green"} />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        {/* <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        /> */}
      </DataTable>
    </ScrollView>
  );
};

export default Table;

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
