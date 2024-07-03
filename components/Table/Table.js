import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button, DataTable, Text } from "react-native-paper";
import { colors } from "../../resources/colors";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Table = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Cam Smith",
      dob: "04/98",
      wing: "1A",
      room: 16,
    },
    {
      key: 2,
      name: "Smith John",
      dob: "04/98",
      wing: "1A",
      room: 16,
    },
    {
      key: 3,
      name: "Erin Smith",
      dob: "04/98",
      wing: "1A",
      room: 16,
    },
    {
      key: 4,
      name: "Cam Smith",
      dob: "04/98",
      wing: "1A",
      room: 16,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView horizontal>
      <DataTable style={{ minWidth: 560 }}>
        <DataTable.Header>
          <DataTable.Title style={{ minWidth: 180 }}>
            <Text style={{ fontWeight: "bold" }}>Name</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 100 }}>
            <Text style={{ fontWeight: "bold" }}>DOB</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 100 }}>
            <Text style={{ fontWeight: "bold" }}>Wing</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 100 }}>
            <Text style={{ fontWeight: "bold" }}>Room</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 50 }}>
            <Text style={{ fontWeight: "bold" }}>Add</Text>
          </DataTable.Title>
          <DataTable.Title style={{ minWidth: 50 }}>
            <Text style={{ fontWeight: "bold" }}>Remove</Text>
          </DataTable.Title>
        </DataTable.Header>

        {items.map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell style={{ minWidth: 180 }}>
              {item.name}
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 100 }}>
              {item.dob}
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 100 }}>
              {item.wing}
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 100 }}>
              {item.room}
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 50 }}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: colors.teal100 }}
              >
                <Entypo name="plus" size={22} color={"green"} />
              </TouchableOpacity>
            </DataTable.Cell>
            <DataTable.Cell style={{ minWidth: 50 }}>
              <TouchableOpacity
                style={{
                  ...styles.removeButton,
                  backgroundColor: colors.orange100,
                }}
              >
                <FontAwesome name="remove" size={20} color={"red"} />
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
