export interface Files {
  files: Array<FilesClass>;
}

export interface FilesClass {
  id: string;
  name: string;
  items: Array<Item>;
}

export interface Item {
  id: string;
  name: string;
}
