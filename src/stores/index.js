import {makeObservable, flow, configure, observable} from "mobx";
import {FrameClient} from "@eluvio/elv-client-js/src/FrameClient";

// Force strict mode so mutations are only allowed within actions.
configure({
  enforceActions: "always"
});

class RootStore {
  client;
  loaded = false;
  network;

  constructor() {
    makeObservable(this, {
      client: observable,
      loaded: observable
    });

    this.Initialize();
  }

  Initialize = flow(function * () {
    try {
      this.client = new FrameClient({
        target: window.parent,
        timeout: 30
      });

      this.network = yield this.client.NetworkInfo();

      window.client = this.client;
    } catch(error) {
      console.error("Failed to initialize application");
      console.error(error);
    } finally {
      this.loaded = true;
    }
  });

  // LoadData = flow(function * () {
  //   gridJson.items.forEach(({url}) => {
  //     const objectId = new URL(url).searchParams.get("oid");
  //     this.LoadItemData({objectId});
  //   });
  // });
  //
  // LoadItemData = flow(function * ({objectId}) {
  //   const libraryId = yield this.client.ContentObjectLibraryId({objectId});
  //   const meta = yield this.client.ContentObjectMetadata({
  //     libraryId,
  //     objectId,
  //     metadataSubtree: "/"
  //   });
  // });
}

export const rootStore = new RootStore();

window.rootStore = rootStore;
