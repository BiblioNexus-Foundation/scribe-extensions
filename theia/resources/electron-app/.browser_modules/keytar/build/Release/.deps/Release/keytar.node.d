cmd_Release/keytar.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.7 -arch arm64 -L./Release -stdlib=libc++  -o Release/keytar.node Release/obj.target/keytar/src/async.o Release/obj.target/keytar/src/main.o Release/obj.target/keytar/src/keytar_mac.o -framework AppKit